import MessagesPage from "./messages/MessagesPage";

export const dynamic = "force-dynamic"; // Must be in a Server Component

export default function AdminPageWrapper() {
  return <MessagesPage />;
}
