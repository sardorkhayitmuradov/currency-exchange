import Loading from "../loading/loading";
import { formatValue } from "react-currency-input-field";
import "./index.css";
import { SummaryProps } from "./interface";

function Result({
  loading,
  result,
  rate,
  into,
  from,
  amount,
  update,
}: SummaryProps) {
  const fromField = from.split(" ")[0].trim().toUpperCase();
  const intoField = into.split(" ")[0].trim().toUpperCase();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        !isNaN(result) &&
        !isNaN(rate) && (
          <>
            <p className="currency-value">
              {formatValue({
                value: `${amount}`,
              })}{" "}
              {fromField}{" "}
              <span
                className={`currency-flag currency-flag-sm currency-flag-${from.toLowerCase()}`}
              />
            </p>
            <p className="currency-summary">
              {formatValue({
                value: `${result}`,
              })}{" "}
              ({intoField.toUpperCase()}){" "}
              <span
                className={`currency-flag currency-flag-lg currency-flag-${intoField.toLowerCase()}`}
              />
            </p>
            <p className="currency-update">Last updated on: {update}</p>
          </>
        )
      )}
    </>
  );
}

export default Result;
