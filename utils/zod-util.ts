import { z } from "zod";
import { IMAGE_FILE_SIZE, IMAGE_MIME_TYPE } from "@/constants";

export { z } from "zod";

export const zodUtil = {
  text: (args?: { min?: number; msg?: string }) =>
    z.string().min(args?.min || 2, args?.msg || "Field is required"),
  email: () =>
    z.string().min(1, "Email is required").email("Invalid email address"),
  tel: () =>
    z
      .string()
      .min(10, { message: "Telephone number is too short" })
      .max(15, { message: "Telephone number is too long" })
      .regex(/^\+?[0-9]+$/, { message: "Invalid telephone number" }),
  password: () =>
    z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
  strongPassword: () =>
    z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character",
      ),
  ip: () => {
    const validate = (ip: string): boolean => {
      const ipv4Regex =
        /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/;
      const ipv6Regex =
        /^([a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}$|^((?:[a-fA-F0-9]{1,4}:){1,7}:|:(?::[a-fA-F0-9]{1,4}){1,7})$/;
      return ipv4Regex.test(ip) || ipv6Regex.test(ip);
    };

    return z.string().refine((val) => validate(val), {
      message: "Invalid IP address",
    });
  },
  imageFile: () =>
    z
      .instanceof(File)
      .optional()
      .refine(
        (file) => !file || file.size <= IMAGE_FILE_SIZE,
        `Image file size is greater than ${IMAGE_FILE_SIZE}MB`,
      )
      .refine(
        (file) => !file || IMAGE_MIME_TYPE.includes(file.type),
        "Only (.jpeg, .png) file extension allowed",
      ),
};

/**
z.string().nullish();
// Accepts: "hello", null, undefined ✅ More flexible 

z.string().nullable(); 
// Accepts: "hello", null ❌ Not undefined


class ZodFacade {
  static text(options?: { minLen?: number; maxLen?: number }) {
    const { minLen = 2, maxLen = 50 } = options ?? {};
    return z.string().min(minLen).max(maxLen);
  }

  static description(options?: { minLen?: number; maxLen?: number }) {
    const { minLen = 3, maxLen = 160 } = options ?? {};
    return z.string().min(minLen).max(maxLen);
  }

  static money(options?: { message?: string }) {
    const { message = "Invalid entry" } = options ?? {};
    return z.preprocess(
      (val) =>
        typeof val === "string" && val.trim() !== "" ? parseFloat(val) : 0,
      z.number().nonnegative(message),
    );
  }

  static select<T extends readonly { value: string; label: string }[]>(
    data: T,
  ) {
    const values = data.map((item) => item.value) as [
      T[number]["value"],
      ...T[number]["value"][],
    ];
    return z.enum(values);
  }

  static pastDate(options?: { message?: string }) {
    const { message = "Invalid date" } = options ?? {};
    return z.date().max(new Date(), { message });
  }

  static futureDate(options?: { message?: string }) {
    const { message = "Invalid date" } = options ?? {};
    return z.date().min(new Date(), { message });
  }

  static imageUrl(options?: {}) {
    return z
      .string()
      .url()
      .refine((url) => /\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i.test(url));
  }

  static reactNativeFile(options?: { size?: number }) {
    const { size = 5 } = options ?? {};
    return z.object({
      uri: z.string().url(),
      type: z.string(),
      name: z.string(),
      size: z.number().max(size * 1024 * 1024),
    });
  }
}
*/
