import { state, mutations } from "@/store";
describe("state", () => {
  it("keeps track of whether user is logged in", () => {
    const startingState = state();
    expect(startingState.isLoggedIn).toBe(false);
  });
});
// 即便狀態的屬性有多個，測試僅需測試一個
describe("mutations", () => {
  describe("LOGIN_USER", () => {
    it("logs the user in", () => {
      const state = { isLoggedIn: false };
      mutations.LOGIN_USER(state);
      // 對象的判斷要用toEqual
      expect(state).toEqual({ isLoggedIn: true });
    });
  });
});
