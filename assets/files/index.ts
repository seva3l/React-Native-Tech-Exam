const IMAGES = {
    'thumbnail-0': require('./thumbnail_0.png'),
    'thumbnail-1': require('./thumbnail_1.png'),
    'thumbnail-2': require('./thumbnail_2.png'),
    'thumbnail-3': require('./thumbnail_3.png'),
    'thumbnail-4': require('./thumbnail_4.png'),
    'thumbnail-5': require('./thumbnail_5.png'),
    'thumbnail-6': require('./thumbnail_6.png'),
    'thumbnail-7': require('./thumbnail_7.png'),
    'thumbnail-8': require('./thumbnail_8.png'),
    'thumbnail-9': require('./thumbnail_9.png'),
    'thumbnail-10': require('./thumbnail_10.png'),
    'thumbnail-11': require('./thumbnail_11.png'),
    'thumbnail-12': require('./thumbnail_12.png'),
    'thumbnail-13': require('./thumbnail_13.png'),
    'thumbnail-14': require('./thumbnail_14.png'),
    'thumbnail-15': require('./thumbnail_15.png'),
    'thumbnail-16': require('./thumbnail_16.png'),
    'thumbnail-17': require('./thumbnail_17.png'),
    'thumbnail-18': require('./thumbnail_18.png'),
    'thumbnail-19': require('./thumbnail_19.png'),
    'thumbnail-20': require('./thumbnail_20.png'),
    'thumbnail-21': require('./thumbnail_21.png'),
    'thumbnail-22': require('./thumbnail_22.png'),
    'thumbnail-23': require('./thumbnail_23.png'),
    'thumbnail-24': require('./thumbnail_24.png'),
    'thumbnail-25': require('./thumbnail_25.png'),
    'thumbnail-26': require('./thumbnail_26.png'),
    'thumbnail-27': require('./thumbnail_27.png'),
    'thumbnail-28': require('./thumbnail_28.png'),
    'thumbnail-29': require('./thumbnail_29.png'),
    'thumbnail-30': require('./thumbnail_30.png'),
    'thumbnail-31': require('./thumbnail_31.png'),
    'thumbnail-32': require('./thumbnail_32.png'),
    'thumbnail-33': require('./thumbnail_33.png'),
    'thumbnail-34': require('./thumbnail_34.png'),
    'thumbnail-35': require('./thumbnail_35.png'),
    'thumbnail-36': require('./thumbnail_36.png'),
    'thumbnail-37': require('./thumbnail_37.png'),
    'thumbnail-38': require('./thumbnail_38.png'),
    'thumbnail-39': require('./thumbnail_39.png'),
    'thumbnail-40': require('./thumbnail_40.png'),
    'thumbnail-41': require('./thumbnail_41.png'),
    'thumbnail-42': require('./thumbnail_42.png'),
    'thumbnail-43': require('./thumbnail_43.png'),
    'thumbnail-44': require('./thumbnail_44.png'),
    'thumbnail-45': require('./thumbnail_45.png'),
    'thumbnail-46': require('./thumbnail_46.png'),
    'thumbnail-47': require('./thumbnail_47.png'),
    'thumbnail-48': require('./thumbnail_48.png'),
    'thumbnail-49': require('./thumbnail_49.png'),
    'thumbnail-50': require('./thumbnail_50.png'),
    'thumbnail-51': require('./thumbnail_51.png'),
    'thumbnail-52': require('./thumbnail_52.png'),
    'thumbnail-53': require('./thumbnail_53.png'),
    'thumbnail-54': require('./thumbnail_54.png'),
    'thumbnail-55': require('./thumbnail_55.png'),
    'thumbnail-56': require('./thumbnail_56.png'),
    'thumbnail-57': require('./thumbnail_57.png'),
    'thumbnail-58': require('./thumbnail_58.png'),
    'thumbnail-59': require('./thumbnail_59.png'),
    'thumbnail-60': require('./thumbnail_60.png'),
    'thumbnail-61': require('./thumbnail_61.png'),
    'thumbnail-62': require('./thumbnail_62.png'),
    'thumbnail-63': require('./thumbnail_63.png'),
    'thumbnail-64': require('./thumbnail_64.png'),
    'thumbnail-65': require('./thumbnail_65.png'),
    'thumbnail-66': require('./thumbnail_66.png'),
    'thumbnail-67': require('./thumbnail_67.png'),
    'thumbnail-68': require('./thumbnail_68.png'),
    'thumbnail-69': require('./thumbnail_69.png'),
    'thumbnail-70': require('./thumbnail_70.png'),
    'thumbnail-71': require('./thumbnail_71.png'),
    'thumbnail-72': require('./thumbnail_72.png'),
    'thumbnail-73': require('./thumbnail_73.png'),
    'thumbnail-74': require('./thumbnail_74.png'),
    'thumbnail-75': require('./thumbnail_75.png'),
    'thumbnail-76': require('./thumbnail_76.png'),
    'thumbnail-77': require('./thumbnail_77.png'),
    'thumbnail-78': require('./thumbnail_78.png'),
    'thumbnail-79': require('./thumbnail_79.png'),
    'thumbnail-80': require('./thumbnail_80.png'),
    'thumbnail-81': require('./thumbnail_81.png'),
    'thumbnail-82': require('./thumbnail_82.png'),
    'thumbnail-83': require('./thumbnail_83.png'),
    'thumbnail-84': require('./thumbnail_84.png'),
    'thumbnail-85': require('./thumbnail_85.png'),
    'thumbnail-86': require('./thumbnail_86.png'),
    'thumbnail-87': require('./thumbnail_87.png'),
    'thumbnail-88': require('./thumbnail_88.png'),
    'thumbnail-89': require('./thumbnail_89.png'),
    'thumbnail-90': require('./thumbnail_90.png'),
    'thumbnail-91': require('./thumbnail_91.png'),
    'thumbnail-92': require('./thumbnail_92.png'),
    'thumbnail-93': require('./thumbnail_93.png'),
    'thumbnail-94': require('./thumbnail_94.png'),
    'thumbnail-95': require('./thumbnail_95.png'),
    'thumbnail-96': require('./thumbnail_96.png'),
    'thumbnail-97': require('./thumbnail_97.png'),
    'thumbnail-98': require('./thumbnail_98.png'),
    'thumbnail-99': require('./thumbnail_99.png'),
    'thumbnail-100': require('./thumbnail_100.png'),
    'thumbnail-101': require('./thumbnail_101.png'),
    'thumbnail-102': require('./thumbnail_102.png'),
    'thumbnail-103': require('./thumbnail_103.png'),
    'thumbnail-104': require('./thumbnail_104.png'),
    'thumbnail-105': require('./thumbnail_105.png'),
    'thumbnail-106': require('./thumbnail_106.png'),
    'thumbnail-107': require('./thumbnail_107.png'),
    'thumbnail-108': require('./thumbnail_108.png'),
    'thumbnail-109': require('./thumbnail_109.png'),
    'thumbnail-110': require('./thumbnail_110.png'),
    'thumbnail-111': require('./thumbnail_111.png'),
    'thumbnail-112': require('./thumbnail_112.png'),
    'thumbnail-113': require('./thumbnail_113.png'),
    'thumbnail-114': require('./thumbnail_114.png'),
    'thumbnail-115': require('./thumbnail_115.png'),
    'thumbnail-116': require('./thumbnail_116.png'),
    'thumbnail-117': require('./thumbnail_117.png'),
    'thumbnail-118': require('./thumbnail_118.png'),
    'thumbnail-119': require('./thumbnail_119.png'),
    'thumbnail-120': require('./thumbnail_120.png'),
    'thumbnail-121': require('./thumbnail_121.png'),
    'thumbnail-122': require('./thumbnail_122.png'),
    'thumbnail-123': require('./thumbnail_123.png'),
    'thumbnail-124': require('./thumbnail_124.png'),
    'thumbnail-125': require('./thumbnail_125.png'),
    'thumbnail-126': require('./thumbnail_126.png'),
    'thumbnail-127': require('./thumbnail_127.png'),
    'thumbnail-128': require('./thumbnail_128.png'),
    'thumbnail-129': require('./thumbnail_129.png'),
    'thumbnail-130': require('./thumbnail_130.png'),
    'thumbnail-131': require('./thumbnail_131.png'),
    'thumbnail-132': require('./thumbnail_132.png'),
    'thumbnail-133': require('./thumbnail_133.png'),
    'thumbnail-134': require('./thumbnail_134.png'),
    'thumbnail-135': require('./thumbnail_135.png'),
    'thumbnail-136': require('./thumbnail_136.png'),
    'thumbnail-137': require('./thumbnail_137.png'),
    'thumbnail-138': require('./thumbnail_138.png'),
    'thumbnail-139': require('./thumbnail_139.png'),
    'thumbnail-140': require('./thumbnail_140.png'),
    'thumbnail-141': require('./thumbnail_141.png'),
    'thumbnail-142': require('./thumbnail_142.png'),
    'thumbnail-143': require('./thumbnail_143.png'),
    'thumbnail-144': require('./thumbnail_144.png'),
    'thumbnail-145': require('./thumbnail_145.png'),
    'thumbnail-146': require('./thumbnail_146.png'),
    'thumbnail-147': require('./thumbnail_147.png'),
    'thumbnail-148': require('./thumbnail_148.png'),
    'thumbnail-149': require('./thumbnail_149.png'),
    'thumbnail-150': require('./thumbnail_150.png'),
    'thumbnail-151': require('./thumbnail_151.png'),
    'thumbnail-152': require('./thumbnail_152.png'),
    'thumbnail-153': require('./thumbnail_153.png'),
    'thumbnail-154': require('./thumbnail_154.png'),
    'thumbnail-155': require('./thumbnail_155.png'),
    'thumbnail-156': require('./thumbnail_156.png'),
    'thumbnail-157': require('./thumbnail_157.png'),
    'thumbnail-158': require('./thumbnail_158.png'),
    'thumbnail-159': require('./thumbnail_159.png'),
    'thumbnail-160': require('./thumbnail_160.png'),
    'thumbnail-161': require('./thumbnail_161.png'),
    'thumbnail-162': require('./thumbnail_162.png'),
    'thumbnail-163': require('./thumbnail_163.png'),
    'thumbnail-164': require('./thumbnail_164.png'),
    'thumbnail-165': require('./thumbnail_165.png'),
    'thumbnail-166': require('./thumbnail_166.png'),
    'thumbnail-167': require('./thumbnail_167.png'),
    'thumbnail-168': require('./thumbnail_168.png'),
    'thumbnail-169': require('./thumbnail_169.png'),
    'thumbnail-170': require('./thumbnail_170.png'),
    'thumbnail-171': require('./thumbnail_171.png'),
    'thumbnail-172': require('./thumbnail_172.png'),
    'thumbnail-173': require('./thumbnail_173.png'),
    'thumbnail-174': require('./thumbnail_174.png'),
    'thumbnail-175': require('./thumbnail_175.png'),
    'thumbnail-176': require('./thumbnail_176.png'),
    'thumbnail-177': require('./thumbnail_177.png'),
    'thumbnail-178': require('./thumbnail_178.png'),
    'thumbnail-179': require('./thumbnail_179.png'),
    'thumbnail-180': require('./thumbnail_180.png'),
    'thumbnail-181': require('./thumbnail_181.png'),
    'thumbnail-182': require('./thumbnail_182.png'),
    'thumbnail-183': require('./thumbnail_183.png'),
    'thumbnail-184': require('./thumbnail_184.png'),
    'thumbnail-185': require('./thumbnail_185.png'),
    'thumbnail-186': require('./thumbnail_186.png'),
    'thumbnail-187': require('./thumbnail_187.png'),
    'thumbnail-188': require('./thumbnail_188.png'),
    'thumbnail-189': require('./thumbnail_189.png'),
    'thumbnail-190': require('./thumbnail_190.png'),
    'thumbnail-191': require('./thumbnail_191.png'),
    'thumbnail-192': require('./thumbnail_192.png'),
    'thumbnail-193': require('./thumbnail_193.png'),
  };
  
  export default IMAGES;
  