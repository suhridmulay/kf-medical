fc33abc0-dd39-41a4-8274-bd9b0a02d5c1# Creates a file that can be loaded on to the MySQL database
# using data load in file
# Ref: https://www.tutorialspoint.com/mysql/mysql_load_data.htm
# CMD: LOAD DATA LOCAL INFILE 'filename' INTO TABLE medicineEnums
#      FIELDS TERMINATED BY ','  LINES TERMINATED BY '\n'
#      (id,tenantId,createdById,medicineName,compositionName);

USER_ID    = '27546102-2bd4-47c3-8fa4-ce8d3ac4784e'
TENANT_ID  = 'fc33abc0-dd39-41a4-8274-bd9b0a02d5c1'
RAW_INPUT  = 'rhcf-medicine-csv-20220403.csv'

import uuid

def main ():
    f = open(RAW_INPUT, "r")
    lines = f.readlines()

    for l in lines:
        brand, composition = l.rstrip().split(",")
        print("%s,%s,%s,%s,%s" % (str(uuid.uuid4()),TENANT_ID,USER_ID,brand,composition))

if __name__ == "__main__":
    main()
