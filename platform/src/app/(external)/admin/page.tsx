import { Setup } from "@/app/(external)/admin/_components/setup";

import { Panel } from "./_components/panel";

export default function Home() {
    return (
        <main>
            <Panel>
                {/* <Login /> */}
                <Setup />
            </Panel>
        </main>
    );
}
