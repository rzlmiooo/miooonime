import { Field } from "formik";

type Props = {
  name: string;
  type?: string;
  placeholder: string;
};

export default function InputField({
  name,
  type = "text",
  placeholder,
}: Props) {
  return (
    <Field
      name={name}
      type={type}
      placeholder={placeholder}
      className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none"
    />
  );
}
