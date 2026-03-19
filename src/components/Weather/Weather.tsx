import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Formik, Field, Form } from "formik";
import { useId, useState } from "react";
import css from "./Weather.module.css";

import { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

// const apiKey = import.meta.env.VITE_WEATHER_KEY;

interface QueryType {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

interface FormikType {
  city: string;
}

export function Weather() {
  const customId = useId();

  const [currentCity, setCity] = useState("");
  const [modalOpen, setMOdalOpen] = useState(false);

  const InitialFormik: FormikType = {
    city: "",
  };

  const poshukW = async () => {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=1946f743cb894e5788f122336261903&q=${currentCity}&lang=uk`,
    );
    console.log(response.data);

    return response.data;
  };

  const { data, error, isError, isLoading, refetch } = useQuery<QueryType>({
    queryKey: ["weathers", currentCity],
    queryFn: poshukW,
    enabled: !!currentCity,
  });

  if (isLoading) {
    return (
      <ClipLoader
        className={css.spinner}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }

  if (isError) {
    console.log(error.message);

    return <Toaster position="top-center" reverseOrder={false} />;
  }

  const handleSubmit = (values: FormikType) => {
    console.log("Натиснули");
    setMOdalOpen(true);
    setCity(values.city);
    refetch();
  };

  return (
    <div className={css.gen_div}>
      <Formik initialValues={InitialFormik} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <h2 className={css.legend}>Put your city...</h2>
          <label htmlFor={`${customId}-city`}>
            <Field
              className={css.field}
              type="text"
              name="city"
              id={`${customId}-city`}
              placeholder="Input your city"
              required
            ></Field>
          </label>
          <button type="submit" className={css.btn}>
            Find
          </button>
        </Form>
      </Formik>

      {modalOpen && data && (
        <div className={css.overlay}>
          <div className={css.modal}>
            <img src={data.current.condition.icon} alt="image of weather" />
            <p>Country: {data.location.country}</p>
            <p>City: {data.location.name}</p>
            <p>Temperature: {data.current.temp_f} °C</p>
            <p>State: {data.current.condition.text}</p>
            <button
              type="button"
              onClick={() => setMOdalOpen(false)}
              className={css.modal_btn}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
