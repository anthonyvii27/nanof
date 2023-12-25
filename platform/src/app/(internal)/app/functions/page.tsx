import { Config } from "@/app/(internal)/app/functions/_components/config";
import { Editor } from "@/app/(internal)/app/functions/_components/editor";
import { List } from "@/app/(internal)/app/functions/_components/list";
import { ReactElement } from "react";

import { Root } from "./styles";

const Page = (): ReactElement => (
    <Root>
        <List />
        <Editor />
        <Config />
    </Root>
);

export default Page;
