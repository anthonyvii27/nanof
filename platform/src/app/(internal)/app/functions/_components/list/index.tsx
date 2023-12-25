import { Item } from "@/app/(internal)/app/functions/_components/list/components/item";
import { Button } from "@/components/button";
import { CoreTheme } from "@/theme/core";
import { ReactElement } from "react";
import { IoMdAdd } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

import { Root, Title, Search, ListContainer } from "./styles";

const List = (): ReactElement => (
    <Root>
        <Title>Funções</Title>
        <div style={{ padding: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
            <Search>
                <IoSearch id="icon-search" size={18} color={CoreTheme.colors.gray60} />
                <input placeholder="Search" />
            </Search>
            <Button>
                <IoMdAdd size={20} />
            </Button>
        </div>
        <ListContainer>
            <Item>Function 6</Item>
        </ListContainer>
    </Root>
);

export { List };
