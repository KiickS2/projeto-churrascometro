import { useNavigate } from "react-router-dom";

import { foodNames } from "../types/types";

import { Formik, Field, Form } from "formik";

import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  people: Yup.number().min(1, "O número de pessoas é obrigatório!"),
  foodSelection: Yup.array()
    .of(Yup.string())
    .test(
      "checkbox-foodSelection",
      "Selecione pelo menos um alimento.",
      (array) => array !== null && array!.length > 0
    ),
});

const BarbecueCalculator = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Formik
        initialValues={{ people: 0, foodSelection: [] }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          navigate("/results", {
            state: {
              people: values.people,
              foodSelection: values.foodSelection,
            }
          });
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="people">Número de Pessoas:</label>
              <Field name="people" type="number" />
              {errors.people && touched.people ? (<p>{errors.people}</p>) : null}
            </div>
            <h2>Selecione os alimentos para o churrasco:</h2>
            {errors.foodSelection && touched.foodSelection ? (<p>{errors.foodSelection}</p>) : null}
            {Object.keys(foodNames).map((food) => (
              <div>
                <Field type="checkbox" name="foodSelection" value={food} />
                <label htmlFor="foodSelection">{foodNames[food]}</label>
              </div>
            ))}
            <button type="submit">Calcular</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BarbecueCalculator;
