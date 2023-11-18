import { Formik, ErrorMessage, Field } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { StyledForm, AddBtn} from './NameForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

const formSquema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.number().required('Required'),
});
export const NameForm = () => {
  const dispatch = useDispatch();
  // const [value, setValue] = useState(0);
  // console.log(value);
  const contacts=useSelector(selectContacts)


  // const handleInputChange = evt => {
  //   const { value, name } = evt.target;
  //   setValue({ [name]: value.trim() });
  // };

  const handleSubmit = (values, actions) => {
     const isInContacts = contacts.find(({ name }) => name.toLowerCase() === values.name.toLowerCase())
    if (isInContacts) {
  return alert(`This contact is in your contacts`)
    } 
      console.log(values);

    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      validationSchema={formSquema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <label>
          {' '}
          Name
          <Field
            name="name"
            // onInput={handleInputChange}
            placeholder="Name"
          />
          <ErrorMessage name="name" />
        </label>

        <label>
          {' '}
          Number
          <Field
            name="number"
            // onInput={handleInputChange}
            placeholder="number"
          />
          <ErrorMessage name="number" />
        </label>

        <AddBtn type="submit">Add contact</AddBtn>
      </StyledForm>
    </Formik>
  );
};
