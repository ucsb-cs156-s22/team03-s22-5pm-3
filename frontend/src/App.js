import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "main/pages/HomePage";
import ProfilePage from "main/pages/ProfilePage";
import AdminUsersPage from "main/pages/AdminUsersPage";

import TodosIndexPage from "main/pages/Todos/TodosIndexPage";
import TodosCreatePage from "main/pages/Todos/TodosCreatePage";
import TodosEditPage from "main/pages/Todos/TodosEditPage";

import DiningCommonsIndexPage from "main/pages/DiningCommons/DiningCommonsIndexPage";

import ArticleIndexPage from "main/pages/Article/ArticleIndexPage";

import UCSBDatesIndexPage from "main/pages/UCSBDates/UCSBDatesIndexPage";
import UCSBDatesCreatePage from "main/pages/UCSBDates/UCSBDatesCreatePage";
import UCSBDatesEditPage from "main/pages/UCSBDates/UCSBDatesEditPage";

import MenuItemReviewsIndexPage from "main/pages/MenuItemReviews/MenuItemReviewsIndexPage";

import RecommendationsIndexPage from "main/pages/Recommendations/RecommendationsIndexPage";

import UCSBOrganizationIndexPage from "main/pages/UCSBOrganization/UCSBOrganizationIndexPage";

import UCSBDiningCommonsMenuItemIndexPage from "main/pages/UCSBDiningCommonsMenuItem/UCSBDiningCommonsMenuItemIndexPage";

import HelpRequestsIndexPage from "main/pages/HelpRequests/HelpRequestsIndexPage";

import { hasRole, useCurrentUser } from "main/utils/currentUser";

import "bootstrap/dist/css/bootstrap.css";


function App() {

  const { data: currentUser } = useCurrentUser();

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/profile" element={<ProfilePage />} />
        {
          hasRole(currentUser, "ROLE_ADMIN") && <Route exact path="/admin/users" element={<AdminUsersPage />} />
        }
        {
          hasRole(currentUser, "ROLE_USER") && (
            <>
              <Route exact path="/todos/list" element={<TodosIndexPage />} />
              <Route exact path="/todos/create" element={<TodosCreatePage />} />
              <Route exact path="/todos/edit/:todoId" element={<TodosEditPage />} />
            </>
          )
        }
        {
          hasRole(currentUser, "ROLE_USER") && (
            <>
              <Route exact path="/diningCommons/list" element={<DiningCommonsIndexPage />} />
            </>
          )
        }
        {
          hasRole(currentUser, "ROLE_USER") && (
            <>
              <Route exact path="/ucsbdates/list" element={<UCSBDatesIndexPage />} />
            </>
          )
        }
        {
          hasRole(currentUser, "ROLE_ADMIN") && (
            <>
              <Route exact path="/ucsbdates/edit/:id" element={<UCSBDatesEditPage />} />
              <Route exact path="/ucsbdates/create" element={<UCSBDatesCreatePage />} />
            </>
          )
        }
        {
          hasRole(currentUser, "ROLE_USER") && (
            <>
              <Route exact path="/menuitemreview/list" element={<MenuItemReviewsIndexPage />} />
            </>
          )
        }
        {
          hasRole(currentUser, "ROLE_USER") && (
            <>
              <Route exact path="/recommendationrequests/list" element={<RecommendationsIndexPage />} />
            </>
          )
        }
        {
          hasRole(currentUser, "ROLE_USER") && (
            <>
              <Route exact path="/article/list" element={<ArticleIndexPage />} />
            </>
          )
        }
        {
          hasRole(currentUser, "ROLE_USER") && (
            <>
              <Route exact path="/ucsborganization/list" element={<UCSBOrganizationIndexPage />} />
            </>
          )
        }
        {
          hasRole(currentUser, "ROLE_USER") && (
            <>
              <Route exact path="/ucsbdiningcommonsmenuitem/list" element={<UCSBDiningCommonsMenuItemIndexPage />} />
            </>
          )
        }
        {
          hasRole(currentUser, "ROLE_USER") && (
            <>
              <Route exact path="/helprequests/list" element={<HelpRequestsIndexPage />} />
            </>
          )
        }

      </Routes>
    </BrowserRouter>
  );
}

export default App;
