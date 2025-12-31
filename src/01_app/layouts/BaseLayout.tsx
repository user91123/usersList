import styles from "./styles.module.css";
import { Header } from "@/03_widgets/header/ui";
import { Outlet } from "react-router-dom";
import { CreateUserModal } from "@/04_features/user/form/createUser";
import { EditUserModal } from "@/04_features/user/form/editUser/ui/EditUserModal/EditUserModal";
import { Suspense } from "react";
import { LoadingPage } from "@/02_pages/loading";

export const BaseLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.container}>
        <Suspense fallback={<LoadingPage />}>
          <Outlet />
        </Suspense>
      </div>
      <CreateUserModal />
      <EditUserModal />
    </div>
  );
};
