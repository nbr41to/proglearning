import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { auth } from "src/lib/config";

type UserAuth = {
  isLoading: boolean;
  uid: string | null;
};

/* ページ制限をしたい */
const permissionRoutes = {
  free: ["/"],
  lite: ["/"],
  closer: ["/"],
};

export const useAuth = () => {
  const [authState, setAuthState] = useState<UserAuth>({
    isLoading: true,
    uid: null,
  });
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthState({
          isLoading: false,
          uid: user.uid,
        });
      }
      if (!user) {
        setAuthState({
          isLoading: false,
          uid: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return authState;
};