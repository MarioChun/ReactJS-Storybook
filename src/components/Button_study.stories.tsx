import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button_study from "./Button_study";

export default {
  title: "components/Button_study",
  component: Button_study,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Button_study>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button_study> = (args) => (
  <Button_study {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  text: "hello",
  designType: "primary",
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  text: "hello",
  designType: "default",
};
