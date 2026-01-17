"use client";

import { Formik, Form } from "formik";
import { useRouter } from "next/navigation";
import AuthCard from "../components/display/AuthCard";
import InputField from "../components/display/InputField";
import ErrorText from "../components/display/ErrorText";
import PrimaryButton from "../components/display/PrimaryButton";

export default function LoginPage() {
  const router = useRouter();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(v) => {
        const e: any = {};
        if (!v.email) e.email = "Email wajib";
        if (!v.password) e.password = "Password wajib";
        return e;
      }}
      onSubmit={async (values, { setErrors }) => {
        const res = await fetch("/api/v1/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const data = await res.json();
        if (!res.ok) {
          setErrors({ email: data.message });
          return;
        }

        localStorage.setItem("token", data.token);
        router.push("/profile");
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <AuthCard title="Login">
          <Form className="space-y-4">
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
              {touched.password && <ErrorText message={errors.password} />}
            </div>

            <PrimaryButton loading={isSubmitting}>
              Login
            </PrimaryButton>
          </Form>
        </AuthCard>
      )}
    </Formik>
  );
}
