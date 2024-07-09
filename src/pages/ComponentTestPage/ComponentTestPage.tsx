import { PullToRefresh } from "@/components/PullToRefresh";

import style from "./ComponentTestPage.module.css";

const ComponentTestPage = () => {
  return (
    <div className={style.container}>
      <div className={style.sectionContainer}>
        <h3 className={style.sectionTitle}>Pull-To-Refresh</h3>
        <PullToRefresh></PullToRefresh>
      </div>
    </div>
  );
};

export default ComponentTestPage;
