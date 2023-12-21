import { FirstAccess } from "@/app/(external)/admin/_components/firstAccess";

import { Panel } from "./_components/panel";

export default function Home() {
    return (
        <main>
            <Panel>
                {/* <Login /> */}
                {/* <Setup /> */}
                <FirstAccess />
            </Panel>
        </main>
    );
}
