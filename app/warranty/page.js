"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const WarrantyPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the English warranty page
    router.push("/en/warranty");
  }, [router]);

  // Return a minimal component while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00a0dc] mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting...</p>
        </div>
    </div>
  );
}

export default WarrantyPage
