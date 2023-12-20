import "styled-components";
import { CoreTheme } from "@/theme/core";

type Theme = typeof CoreTheme;

declare module "styled-components" {
    export interface DefaultTheme extends Theme {}
}
