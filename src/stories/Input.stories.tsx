import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "../components/input/Input";

export default {
  title: "components/Input",
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "default",
};
