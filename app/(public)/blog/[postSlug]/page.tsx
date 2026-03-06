import { Footer } from "@/components/footer";
import type { Metadata } from "next";

// Optional: metadata for this page
export const metadata: Metadata = {
  title: "Page Removed",
  description: "This page previously contained blog posts.",
};

export default function BlogPostPage() {
  return (
    <>
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Blog Removed</h1>
        <p className="mt-4 text-gray-600">
          The blog section has been removed from this portfolio.
        </p>
      </div>
      <Footer />
    </>
  );
}