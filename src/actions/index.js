function action(type, payload = {}) {
  return { type, ...payload };
}

export const LOAD_APPLICATION = "LOAD_APPLICATION";

export const loadApplication = (params = {}) =>
  action(LOAD_APPLICATION, { params });
