"use client";

import { Formik, Form } from "formik";
import { useRouter } from "next/navigation";
import AuthCard from "../components/display/AuthCard";
import InputField from "../components/display/InputField";
import ErrorText from "../components/display/ErrorText";
import PrimaryButton from "../components/display/PrimaryButton";

type Values = {
  name: string;
  email: string;
  password: string;
};

export default function RegisterPage() {
  const router = useRouter();

  return (
    <Formik<Values>
      initialValues={{ name: "", email: "", password: "" }}
      validate={(v) => {
        const e: Partial<Values> = {};

        if (!v.name) e.name = "Nama wajib diisi";
        if (!v.email) e.email = "Email wajib diisi";
        if (!v.password) e.password = "Password wajib diisi";

        return e;
      }}
      onSubmit={async (values, { setSubmitting, setErrors }) => {
        const res = await fetch("/api/v1/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const data = await res.json();

        if (!res.ok) {
          setErrors({ email: data.message });
          setSubmitting(false);
          return;
        }

        setSubmitting(false);
        router.push("/auth/login");
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <AuthCard title="Register">
          <Form className="space-y-4">
            <div>
              <InputField name="name" placeholder="Nama" />
              {touched.name && <ErrorText message={errors.name} />}
            </div>

            <div>
              <InputField name="email" placeholder="Email" />
              {touched.email && <ErrorText message={errors.email} />}
            </div>

            <div>
              <InputField
                name="password"
                type="password"
                placeholder="Password"
              />
              {touched.password && (
                <ErrorText message={errors.password} />
              )}
            </div>

            <PrimaryButton loading={isSubmitting}>
              Register
            </PrimaryButton>

            <p className="text-center text-sm text-slate-400">
              Sudah punya akun?{" "}
              <a
                href="/auth/login"
                className="text-blue-500 hover:underline"
              >
                Login
              </a>
            </p>
          </Form>
        </AuthCard>
      )}
    </Formik>
  );
}
