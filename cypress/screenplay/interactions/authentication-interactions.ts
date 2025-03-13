import { CypressUIElement } from "../../types";
import {
  getErrorMessageContainer,
  login,
} from "../page-component-objects/login-page";
import { loadPage } from "./app-interactions";

/**
 * Organise high-level application actions in these orchestrator files.
 * These represent interactions with the system as well as interrogations about the system state.
 * Example: `loadLoginPageAndAuthenticate` represents an interaction, because it doesn't produce a result, but rather a side-effect;
 *  while `getLoginPageErrorMessage` represents an interrogation about the system state.
 */

export const getLoginPageErrorMessage = (): CypressUIElement =>
  getErrorMessageContainer();

export const loadLoginPageAndAuthenticate = (
  password: string,
  username: string,
): void => {
  loadPage();
  login(password, username);
};
