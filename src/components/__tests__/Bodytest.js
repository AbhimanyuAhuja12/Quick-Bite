// import { act } from "react";
// import { render, screen } from "@testing-library/react";
// import Body from "../Body";
// import MOCK_DATA from "../Mocks/mockResListData.json";
// import { BrowserRouter } from "react-router-dom";
// import "@testing-library/jest-dom"


// // Mock the fetch function because jsdom does not support it

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve(MOCK_DATA),
//   })
// );

// it("should render the Body component", async () => {
//   await act(async () => {
//     render(
//       <BrowserRouter>
//         <Body />
//       </BrowserRouter>
//     );
//   });


//   const searchBtn = screen.getByRole("button",{name:Search});

// //   console.log(searchBtn);
// const searchInput= screen.getByTestId("searchInput");

// fireEvent.change(searchInput,{target:{ value: "burger"}});

// fireEvent.click(searchBtn);


//   expect(searchBtn).toBeInTheDocument();



  
// });
