import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav";

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("JoJo Careers");
  });
  it("displays menu items in navigation", () => {
    const wrapper = mount(MainNav);
    // const navigationMenuItems = wrapper.findAll("li");
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    // console.log(navigationMenuItems);
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
    // console.log(navigationMenuTexts);
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at JoJo",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });
  describe("when user is logged out", () => {
    it("prompts user to sign in", () => {
      const wrapper = mount(MainNav);
      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true);
    });
  });
  describe("when user is logs in", () => {
    it("displays user profile picture", async () => {
      const wrapper = mount(MainNav);
      let profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });
  });
});
