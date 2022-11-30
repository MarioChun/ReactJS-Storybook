import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "../components/Input";

export default {
  title: "components/Input",
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  placeholder: "default",
};