import { Login } from "@/app/(external)/admin/_components/login";
import { Panel } from "@/app/(external)/admin/_components/panel";

export default function Home() {
    return (
        <main>
            <Panel>
                <Login />
            </Panel>
        </main>
    );
}
