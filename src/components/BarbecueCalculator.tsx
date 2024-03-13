import { useNavigate } from "react-router-dom";

import { foodNames } from "../types/types";

import { Formik, Field, Form } from "formik";

import * as Yup from "yup";

import styles from "./BarbecueCalculator.module.css";

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
    <div className={styles.container}>
      <Formik
        initialValues={{ people: 0, foodSelection: [] }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          navigate("/results", {
            state: {
              people: values.people,
              foodSelection: values.foodSelection,
            },
          });
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={styles.inputGroup}>
              <label htmlFor="people" className={styles.inputLabel}>
                Número de Pessoas:
              </label>
              <Field name="people" type="number" className={styles.inputField}/>
              {errors.people && touched.people ? <p className={styles.error}>{errors.people}</p> : null}
            </div>
            <h2>Selecione os alimentos para o churrasco:</h2>
            {Object.keys(foodNames).map((food) => (
              <div>
                <Field
                  type="checkbox"
                  name="foodSelection"
                  value={food}
                  className={styles.checkboxInput}
                />
                <label htmlFor="foodSelection">{foodNames[food]}</label>
              </div>
            ))}
            {errors.foodSelection && touched.foodSelection ? (
              <p className={styles.error}>{errors.foodSelection}</p>
            ) : null}
            <button type="submit" className={styles.calculateButton}>
              Calcular
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BarbecueCalculator;
