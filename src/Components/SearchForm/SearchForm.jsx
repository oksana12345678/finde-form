import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SearchForm = ({ onSearch }) => {
  const searchId = useId();

  const handleSubmit = (values, action) => {
    const { topic } = values;
    onSearch(topic);
    action.resetForm();
  };
  const contactsSchema = Yup.object().shape({
    topic: Yup.string()
      .min(3, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      validationSchema={contactsSchema}
      onSubmit={handleSubmit}
      initialValues={{ topic: "" }}
    >
      <Form>
        <div>
          <label htmlFor={searchId}>Search</label>
          <Field
            id={searchId}
            type="text"
            name="topic"
            placeholder="Search articles..."
          />
          <ErrorMessage name="topic" component="span" />
        </div>
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};
export default SearchForm;
