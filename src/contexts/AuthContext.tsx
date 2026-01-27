import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

interface UserData {
  organizationId: string;
  organizationName: string;
  email: string;
  role: string;
  subscriptionPlan: string;
  subscriptionStatus: string;
  subscriptionStartDate: string;
  subscriptionEndDate: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  userData: UserData | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshUserData: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async (uid: string) => {
    try {
      // Get user role
      const roleDoc = await getDoc(doc(db, 'user_roles', uid));
      if (!roleDoc.exists()) {
        console.error('User role not found');
        return null;
      }

      const roleData = roleDoc.data();
      const organizationId = roleData.organizationId;

      // Get employee data
      const employeeDoc = await getDoc(doc(db, 'employees', uid));
      const employeeData = employeeDoc.exists() ? employeeDoc.data() : {};

      // Get organization data
      const orgDoc = await getDoc(doc(db, 'organizations', organizationId));
      if (!orgDoc.exists()) {
        console.error('Organization not found');
        return null;
      }

      const orgData = orgDoc.data();

      // Calculate subscription end date based on plan
      const startDate = new Date(orgData.subscriptionStartDate);
      const isYearly = orgData.subscriptionPlan?.includes('Yearly');
      const endDate = new Date(startDate);
      if (isYearly) {
        endDate.setFullYear(endDate.getFullYear() + 1);
      } else {
        endDate.setMonth(endDate.getMonth() + 1);
      }

      return {
        organizationId,
        organizationName: orgData.name || '',
        email: employeeData.email || user?.email || '',
        role: roleData.role || '',
        subscriptionPlan: orgData.subscriptionPlan || '',
        subscriptionStatus: orgData.subscriptionStatus || '',
        subscriptionStartDate: orgData.subscriptionStartDate || '',
        subscriptionEndDate: endDate.toISOString(),
        name: employeeData.name || '',
      };
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  };

  const refreshUserData = async () => {
    if (user) {
      const data = await fetchUserData(user.uid);
      setUserData(data);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      
      if (firebaseUser) {
        const data = await fetchUserData(firebaseUser.uid);
        setUserData(data);
      } else {
        setUserData(null);
      }
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const data = await fetchUserData(result.user.uid);
    if (!data) {
      await signOut(auth);
      throw new Error('No subscription found. Please purchase a plan to access the dashboard.');
    }
    setUserData(data);
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{ user, userData, loading, login, logout, refreshUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
