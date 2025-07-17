import { toast } from "vue-sonner";
import type { IFetchError } from "ofetch";

export const useHandleErrors = () => {
  const { t } = useNuxtApp().$i18n;

  function getErrorMessage(error: unknown) {
    const err = error as IFetchError<{
      message: string | string[];
      statusCode: number;
    }>;
    const message = err.response?._data?.message;
    return (
      (typeof message === "string" ? message : message?.[0]) ||
      t("unknown_error")
    );
  }

  function handle(error: unknown) {
    const message = getErrorMessage(error);
    toast.error(message);
  }

  return { handle, getErrorMessage };
};
