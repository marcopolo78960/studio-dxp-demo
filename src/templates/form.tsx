import CheckboxContainer from "../components/CheckboxContainer";
import CheckboxOption from "../components/CheckboxOption";
import FormHero from "../components/FormHero";
import FormLayout from "../components/FormLayout";
import FormSection from "../components/FormSection";
import FormTextInput from "../components/FormTextInput";
import LinearScaleInput from "../components/LinearScaleInput";

export default function form() {
  return (
    <>
      <FormLayout>
        <FormHero
          title={`Yext Partner feedback survey`}
          description={`As a valued Yext Partner your feedback is extremely important to us.  Please take a few moments to complete the survey below which will help us to understand how we can support you further.`}
          imageUrl={`https://lh4.googleusercontent.com/BzBdlLke6lwh9vSGJDj1BQOh9WcLvJgxDId80FaC-9D3O4SNwR1_S30ybD_UH6wlV0JidOzZ_ktSKHshBCfyKPR6LcrLXN88iBIFiOCwWEbtEC6-1X7CUOaQ0bJ8tdIsp1x0v5ujQJQ2B2oAojz-wP6Sw3Lymw`}
        />
        <FormSection
          title={`Basic Information`}
          description={`This is a section for basic information.`}
        >
          <FormTextInput
            inputType="Short Answer"
            label={`Email`}
            errorText={``}
            required={true}
            underlineDescription={false}
            italicDescription={false}
            boldDescription={false}
            underlineLabel={false}
            italicLabel={false}
            boldLabel={false}
            placeholder={``}
            description={``}
            email={true}
          />
          <FormTextInput
            inputType="Short Answer"
            label={`Full Name`}
            errorText={``}
            required={true}
            underlineDescription={false}
            italicDescription={false}
            boldDescription={false}
            underlineLabel={false}
            italicLabel={false}
            boldLabel={false}
            placeholder={``}
            description={``}
            email={false}
          />
          <FormTextInput
            inputType="Short Answer"
            label={`Company Name`}
            errorText={``}
            required={true}
            underlineDescription={false}
            italicDescription={false}
            boldDescription={false}
            underlineLabel={false}
            italicLabel={false}
            boldLabel={false}
            placeholder={``}
            description={``}
          />
          <FormTextInput
            inputType="Short Answer"
            label={`Job Title`}
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
            inputType={`Paragraph`}
            label={`Which feature of the Summer '21 Release will be most valuable to you?`}
            errorText={``}
            required={true}
            underlineDescription={false}
            italicDescription={false}
            boldDescription={false}
            underlineLabel={false}
            italicLabel={false}
            boldLabel={false}
            placeholder={``}
            description={``}
          />
          <LinearScaleInput
            label={`How satisfied are you with Yext’s products?`}
            min={1}
            minLabel={`Not at all satisfied`}
            max={10}
            maxLabel={`Extremely satisfied`}
            required={false}
            underlineLabel={false}
            italicLabel={false}
            boldLabel={false}
          />
          <LinearScaleInput
            label={`How likely are you to recommend Yext?`}
            min={1}
            minLabel={`Not at all likely`}
            max={10}
            maxLabel={`Extremely likely`}
            required={false}
            underlineLabel={false}
            italicLabel={false}
            boldLabel={false}
          />
          <CheckboxContainer label="Untitled Question" description={``}>
            <CheckboxOption label={``} value={``} />
            <CheckboxOption label={``} value={``} />
          </CheckboxContainer>
        </FormSection>
      </FormLayout>
    </>
  );
}
