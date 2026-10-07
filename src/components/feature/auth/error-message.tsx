export default function WrapperErrorMessages({ errors }: { errors: string[] }) {
  if (!errors) return null;

  return (
    <div className="text-xs text-red-600 text-left mb-2">
      {errors.map((msg: string, i) => (
        <FormFieldErrorMessage key={i} msg={msg} />
      ))}
    </div>
  );
}

export function FormFieldErrorMessage({ msg }: { msg: string }) {
  return (
    <>
      <span className="block ">{msg}</span>
    </>
  );
}
