interface Props {
  label: string;
  placeholder: string;
  id: string;
}

export default function Search({ label, placeholder, id }: Props) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="font-semibold text-gray-700">
        {label}
      </label>
      <br />
      <input
        id={id}
        placeholder={placeholder}
        className=" border border-gray-300 rounded-lg p-2 w-full max-w-96"
      />
    </div>
  );
}
