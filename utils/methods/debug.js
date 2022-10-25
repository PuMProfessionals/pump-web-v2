export function fakeTSObjCheck(obj, expectedKeys) {
  /**
   * Check if keys exist in obj as if this is a typescript interface
   */

  const keys = Object.keys(obj);
  expectedKeys.forEach((expectedKey) => {
    if (!keys.includes(expectedKey)) {
      throw new Error(`key: ${expectedKey} not exist`);
    }
  });
}
