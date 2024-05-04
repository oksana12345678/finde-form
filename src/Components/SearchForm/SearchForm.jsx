import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./SearchForm.module.css";

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
      .required("Required!"),
  });

  return (
    <Formik
      validationSchema={contactsSchema}
      onSubmit={handleSubmit}
      initialValues={{ topic: "" }}
    >
      <Form className={css.form}>
        <div className={css.containerForm}>
          <label className={css.formLabel} htmlFor={searchId}>
            Search
          </label>
          <Field
            className={css.formField}
            id={searchId}
            type="text"
            name="topic"
            placeholder="Search articles..."
          />
          <ErrorMessage
            className={css.errorMessage}
            name="topic"
            component="span"
          />
        </div>
        <button className={css.buttonSubmit} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
};
export default SearchForm;
