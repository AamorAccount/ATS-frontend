import axios from "axios";
import Cookies from "js-cookie";

export async function getPermissions(requiredAccesses = [], userAccesses = []) {
  const token = Cookies.get("token");
  try {
    if (requiredAccesses.length === 0) {
      return false;
    }
    const response = await axios.get(
      import.meta.env.VITE_PERMISSIONS_URL + "/api/v1/project_permissions/ATS",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(response.data);

    let hasPerm = false;

    for (let permission of response.data) {
      const { label, value } = permission;

      if (userAccesses.includes(label) && requiredAccesses.includes(value)) {
        return true;
      }
    }

    return hasPerm;
  } catch (error) {
    console.error("cannot check permisssions", error);
  }
}
