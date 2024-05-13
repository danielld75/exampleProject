import { useState, useEffect } from "react";
import { z } from "zod";

const FormDataSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  birthDate: z.string().min(10, "Invalid date format"),
  hobbies: z.array(z.string()).min(1, "At least one hobby is required"),
});

type FormData = z.infer<typeof FormDataSchema>;

const HistoryItemSchema = z.object({
  value: z.string().min(2).max(100),
  timestamp: z.string(),
});
type HistoryItem = z.infer<typeof HistoryItemSchema>;

export const FormWizard = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    birthDate: "",
    hobbies: [],
  });
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem("history");
    if (storedHistory) {
      try {
        const parsedHistory = JSON.parse(storedHistory);
        if (Array.isArray(parsedHistory)) {
          const validHistory = parsedHistory.filter(
            (item) => HistoryItemSchema.safeParse(item).success,
          );
          setHistory(validHistory);
        }
      } catch (error) {
        console.error("Failed to parse history from localStorage", error);
      }
    }
  }, []);
  const handleBlur = (field: keyof FormData) => {
    const newHistoryItem: HistoryItem = {
      value: formData[field].toString(),
      timestamp: new Date().toISOString(),
    };
    if (HistoryItemSchema.safeParse(newHistoryItem).success) {
      const newHistory = [...history, newHistoryItem];
      setHistory(newHistory);
      localStorage.setItem("history", JSON.stringify(newHistory));
    }
  };
  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleConfirm = () => {
    console.log(formData);
  };

  return (
    <div>
      {step === 1 && (
        <form>
          <div>
            <label>First Name: </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              onBlur={() => handleBlur("firstName")}
            />
          </div>
          <div>
            <label>Last Name: </label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </div>
          <button onClick={handleNext}>Next</button>
        </form>
      )}

      {step === 2 && (
        <form>
          <div>
            <label>Birth Date: </label>
            <input
              type="date"
              value={formData.birthDate}
              onChange={(e) =>
                setFormData({ ...formData, birthDate: e.target.value })
              }
            />
          </div>
          <div>
            <label>Hobbies: </label>
            <input
              type="text"
              value={formData.hobbies.join(",")}
              onChange={(e) =>
                setFormData({ ...formData, hobbies: e.target.value.split(",") })
              }
            />
          </div>
          <button onClick={handleBack}>Back</button>
          <button onClick={handleNext}>Next</button>
          {formData.hobbies.length > 0 ? (
            <button onClick={handleConfirm}>Confirm</button>
          ) : null}
        </form>
      )}

      {step === 3 && (
        <div>
          <p>First Name: {formData.firstName}</p>
          <p>Last Name: {formData.lastName}</p>
          <p>Birth Date: {formData.birthDate}</p>
          <p>Hobbies: {formData.hobbies.join(", ")}</p>
          <button onClick={handleBack}>Back</button>
          <button onClick={handleConfirm}>Confirm</button>
        </div>
      )}

      <div>
        <h2>History:</h2>
        {history.map((item, index) => (
          <div key={index}>
            <p>Value: {item.value}</p>
            <p>Timestamp: {item.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
