import { setup } from "./library.js";
import { getAnimation } from "./animation.js";
import userEvent from "@testing-library/user-event";
// const mockAnimation = jest.fn().mockImplementation(() => "");
jest.mock("./animation.js");

describe("123", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div>
        <label>Texto 1</label>
        <label>Texto 2</label>
      </div>
      `;
  });
  // it("456", () => {
  //   const emailLabel = document.createElement("span");
  //   const passwordLabel = document.createElement("span");
  //   const textInput = document.createElement("input");
  //   const passwordInput = document.createElement("input");
  //   const nodeList = document.querySelectorAll("label");

  //   const getAnimationMock = getAnimation.mockImplementation(() => "asd");

  //   setup(nodeList, emailLabel, passwordLabel, textInput, passwordInput);
  //   console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@");
  //   console.log(nodeList);
  //   console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@");
  //   userEvent.click(passwordLabel);
  //   expect(passwordInput).toHaveFocus();
  // });
  it("implements animation for each label", () => {
    const getAnimationMock = getAnimation.mockImplementation();
    const nodeList = document.querySelectorAll("label");

    setup(nodeList, jest.fn(), jest.fn(), jest.fn(), jest.fn());
    expect(getAnimationMock).toBeCalledTimes(2);
  });
});
