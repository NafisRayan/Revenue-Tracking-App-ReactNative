import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { User, Bell, Shield, CreditCard, Download, CircleHelp as HelpCircle, ChevronRight, Moon, Globe, Lock } from 'lucide-react-native';

export default function Settings() {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(true);
  const [biometricEnabled, setBiometricEnabled] = React.useState(false);

  const settingSections = [
    {
      title: 'Account',
      items: [
        { icon: User, title: 'Profile Settings', subtitle: 'Manage your account information', hasToggle: false },
        { icon: CreditCard, title: 'Payment Methods', subtitle: 'Manage cards and bank accounts', hasToggle: false },
        { icon: Shield, title: 'Privacy & Security', subtitle: 'Control your privacy settings', hasToggle: false },
      ]
    },
    {
      title: 'Preferences',
      items: [
        { 
          icon: Bell, 
          title: 'Notifications', 
          subtitle: 'Push notifications and alerts', 
          hasToggle: true,
          toggleValue: notificationsEnabled,
          onToggle: setNotificationsEnabled
        },
        { 
          icon: Moon, 
          title: 'Dark Mode', 
          subtitle: 'Enable dark theme', 
          hasToggle: true,
          toggleValue: darkModeEnabled,
          onToggle: setDarkModeEnabled
        },
        { icon: Globe, title: 'Language & Region', subtitle: 'Change app language and currency', hasToggle: false },
      ]
    },
    {
      title: 'Security',
      items: [
        { 
          icon: Lock, 
          title: 'Biometric Authentication', 
          subtitle: 'Use fingerprint or face recognition', 
          hasToggle: true,
          toggleValue: biometricEnabled,
          onToggle: setBiometricEnabled
        },
        { icon: Shield, title: 'Two-Factor Authentication', subtitle: 'Add extra security to your account', hasToggle: false },
        { icon: Download, title: 'Export Data', subtitle: 'Download your financial data', hasToggle: false },
      ]
    },
    {
      title: 'Support',
      items: [
        { icon: HelpCircle, title: 'Help & Support', subtitle: 'Get help with your account', hasToggle: false },
        { icon: User, title: 'Contact Us', subtitle: 'Reach out to our support team', hasToggle: false },
      ]
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Settings</Text>
        </View>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.profileAvatar}>
            <Text style={styles.profileInitials}>NH</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Nesher Hamilton</Text>
            <Text style={styles.profileEmail}>nesher@example.com</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>

        {/* Settings Sections */}
        {settingSections.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {section.items.map((item, itemIndex) => (
              <TouchableOpacity key={itemIndex} style={styles.settingItem}>
                <View style={styles.settingItemLeft}>
                  <View style={styles.settingIcon}>
                    <item.icon size={20} color="#9CA3AF" />
                  </View>
                  <View style={styles.settingItemContent}>
                    <Text style={styles.settingTitle}>{item.title}</Text>
                    <Text style={styles.settingSubtitle}>{item.subtitle}</Text>
                  </View>
                </View>
                <View style={styles.settingItemRight}>
                  {item.hasToggle ? (
                    <Switch
                      value={item.toggleValue}
                      onValueChange={item.onToggle}
                      trackColor={{ false: '#374151', true: '#10B981' }}
                      thumbColor={'#FFFFFF'}
                    />
                  ) : (
                    <ChevronRight size={20} color="#6B7280" />
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}

        {/* App Version */}
        <View style={styles.versionSection}>
          <Text style={styles.versionText}>Revenue Tracker v1.0.0</Text>
          <Text style={styles.versionSubtext}>Build 2024.01.15</Text>
        </View>

        {/* Sign Out Button */}
        <TouchableOpacity style={styles.signOutButton}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  profileCard: {
    backgroundColor: '#1F2937',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#374151',
  },
  profileAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#10B981',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  profileInitials: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  editButton: {
    backgroundColor: '#374151',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  editButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  section: {
    marginHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  settingItem: {
    backgroundColor: '#1F2937',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#374151',
  },
  settingItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#374151',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  settingItemContent: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  settingSubtitle: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  settingItemRight: {
    marginLeft: 12,
  },
  versionSection: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  versionText: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  versionSubtext: {
    fontSize: 12,
    color: '#6B7280',
  },
  signOutButton: {
    backgroundColor: '#EF4444',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 40,
    alignItems: 'center',
  },
  signOutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});