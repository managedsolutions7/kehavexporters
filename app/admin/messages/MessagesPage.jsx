"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("/api/admin/messages");
        if (!response.ok) {
          throw new Error("Failed to fetch messages");
        }
        const data = await response.json();
        setMessages(data);
      } catch (err) {
        setError(err.message);
        toast({
          variant: "destructive",
          title: "Error",
          description: err.message,
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    toast({ title: "Logged out successfully." });
    router.push("/admin/login");
  };

  if (isLoading) {
    return <div className="text-center p-10">Loading messages...</div>;
  }

  if (error) {
    return <div className="text-center p-10 text-red-500">Error: {error}</div>;
  }

  return (
    <>
      <Toaster />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Contact Form Submissions
            </h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="space-y-4">
              {messages.length === 0 ? (
                <p>No messages found.</p>
              ) : (
                messages.map((msg) => (
                  <div
                    key={msg._id}
                    className="bg-white shadow-md rounded-lg p-6"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-lg font-semibold text-gray-800">
                          {msg.firstName} {msg.lastName}
                        </p>
                        <a
                          href={`mailto:${msg.email}`}
                          className="text-sm text-[#3A874C] hover:underline"
                        >
                          {msg.email}
                        </a>
                      </div>
                      <span className="text-xs text-gray-500">
                        {new Date(msg.createdAt).toLocaleString()}
                      </span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600">
                        <strong>Phone:</strong> {msg.phone || "N/A"}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Company:</strong> {msg.company || "N/A"}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Country:</strong> {msg.country || "N/A"}
                      </p>
                      <p className="mt-2 text-gray-700 whitespace-pre-wrap">
                        {msg.message}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
