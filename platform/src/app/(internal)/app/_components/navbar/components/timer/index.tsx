"use client";

import { format } from "date-fns";
import { ReactElement, useEffect, useState } from "react";
import { MdOutlineAvTimer } from "react-icons/md";

import { Root, Text } from "./styles";

const Timer = (): ReactElement => {
    const [currentTime, setCurrentTime] = useState<Date>(new Date());

    useEffect(() => {
        const intervalId = setInterval((): void => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formattedDateTime: string = format(currentTime, "dd/MM/yyyy HH:mm");

    return (
        <Root>
            <Text>
                <MdOutlineAvTimer size={15} />
                <strong>Current Time</strong>
            </Text>
            <Text>{formattedDateTime}</Text>
        </Root>
    );
};

export { Timer };
