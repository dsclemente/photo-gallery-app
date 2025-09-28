import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'photo-gallery',
  webDir: 'www',   plugins: {
    LiveUpdates: {
      appId: '1d6ee7e7',
      channel: 'Production',
      autoUpdateMethod: 'background',
      maxVersions: 2
    }
  }
};

export default config;
