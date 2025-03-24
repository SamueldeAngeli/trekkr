import React from "react";
import styles from "./sidebar.module.css";
import { Home, Search, Bell, Mail, Bookmark, Users, Star, Bolt, User, MoreHorizontal } from "lucide-react";

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <button className={styles.closeButton}>
        <img src="/images/trekkr-logo.jpg" alt="Trekkr Logo" className={styles.logo} />
      </button>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}><Home size={24} /> <span>Home</span></li>
        <li className={styles.menuItem}><Search size={24} /> <span>Explore</span></li>
        <li className={styles.menuItem}><Bell size={24} /> <span>Notifications</span></li>
        <li className={styles.menuItem}><Mail size={24} /> <span>Messages</span></li>
        <li className={styles.menuItem}><Star size={24} /> <span>Grok</span></li>
        <li className={styles.menuItem}><Bookmark size={24} /> <span>Bookmarks</span></li>
        <li className={styles.menuItem}><Users size={24} /> <span>Communities</span></li>
        <li className={styles.menuItem}><Star size={24} /> <span>Premium</span></li>
        <li className={styles.menuItem}><Bolt size={24} /> <span>Verified Orgs</span></li>
        <li className={styles.menuItem}><User size={24} /> <span>Profile</span></li>
        <li className={styles.menuItem}><MoreHorizontal size={24} /> <span>More</span></li>
      </ul>
      <button className={styles.postButton}>Post</button>
    </div>
  );
}
