import FormLayout from "../components/FormLayout";
import FormSection from "../components/FormSection";
import FormTextInput from "../components/FormTextInput";
import Paragraph from "../components/Paragraph";

export default function form() {
  return (
    <FormLayout>
      <FormSection
        title={`Basic Information`}
        description={`This is a section for basic information.`}
      >
        <FormTextInput
          inputType="Short Answer"
          label={`Email`}
          description={`Enter your Email`}
          placeholder={`Your Email Here`}
          inputValidation={``}
          errorText={``}
          required={true}
          underlineDescription={false}
          italicDescription={false}
          boldDescription={false}
          underlineLabel={false}
          italicLabel={false}
          boldLabel={false}
        />
        <FormTextInput
          inputType="Short Answer"
          label={`Full Name`}
          description={`Enter your full name`}
          placeholder={`Full name goes here`}
          inputValidation={``}
          errorText={``}
          required={true}
          underlineDescription={false}
          italicDescription={false}
          boldDescription={false}
          underlineLabel={false}
          italicLabel={false}
          boldLabel={false}
        />
        <FormTextInput
          inputType="Short Answer"
          label={`Company Name`}
          description={`Your Company's Name`}
          placeholder={`Your Company's Name`}
          inputValidation={``}
          errorText={``}
          required={true}
          underlineDescription={false}
          italicDescription={false}
          boldDescription={false}
          underlineLabel={false}
          italicLabel={false}
          boldLabel={false}
        />
        <FormTextInput
          inputType="Short Answer"
          label={`Job Title`}
          description={`Enter you Job Title`}
          placeholder={`Job Title Here`}
          inputValidation={``}
          errorText={``}
          required={true}
          underlineDescription={false}
          italicDescription={false}
          boldDescription={false}
          underlineLabel={false}
          italicLabel={false}
          boldLabel={false}
        />
        <FormTextInput
          inputType={Paragraph}
          label={`Which feature of the Summer '21 Release will be most valuable to you?`}
          description={`Enter your feature here`}
          placeholder={`Your feature here`}
          inputValidation={``}
          errorText={``}
          required={true}
          underlineDescription={false}
          italicDescription={false}
          boldDescription={false}
          underlineLabel={false}
          italicLabel={false}
          boldLabel={false}
        />
      </FormSection>
    </FormLayout>
  );
}
