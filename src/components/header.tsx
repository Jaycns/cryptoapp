import React from "react";
import { Button, Header } from "../styles/styles";
import { FaLongArrowAltRight } from "react-icons/fa";
import { phSize } from "../pages/landing";

interface compProps {
  title: string;
}
function HeaderBox({ title }: compProps) {
  return (
    <Header>
      <main>
        <h1>{title}</h1>
        <p className="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <form>
          <Button>
            <p>Try Web3ATL Now</p>
            {phSize && <FaLongArrowAltRight />}
          </Button>
          {!phSize && (
            <Button>
              <p>Try Web3ATL Now</p>
              {phSize && <FaLongArrowAltRight />}
            </Button>
          )}
        </form>
      </main>
    </Header>
  );
}

export default HeaderBox;
