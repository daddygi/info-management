import { useEffect } from "react";
import { useRouter } from "next/router";

const Loading = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/login");
    }, 3000); // change this to however long you want the loading screen to be displayed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="loading">
      <h1>Loading...</h1>
      {/* Add any additional loading animations or UI here */}
    </div>
  );
};

export default Loading;
