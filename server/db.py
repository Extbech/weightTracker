import sqlite3
from sqlite3 import Error
from datetime import date, timedelta
from helper import Calculate_Maximum_weight_loss, Calculate_kcal_deficit

database = r"./database.db"


def create_connection(db_file):
    """create a database connection to the SQLite database
        specified by db_file
    :param db_file: database file
    :return: Connection object or None
    """
    conn = None
    try:
        conn = sqlite3.connect(db_file)
        return conn
    except Error as e:
        print(e)

    return conn


##### CREATE TABLES ########

sql_create_weight_table = """CREATE TABLE IF NOT EXISTS weightTracker (
                                name TEXT NOT NULL,
                                timestamp DATETIME NOT NULL,
                                weight REAL,
                                kcal_500 REAL,
                                kcal_1000 REAL,
                                max_weight_1 REAL,
                                max_weight_2 REAL,
                                max_weight_3 REAL,
                                max_weight_4 REAL,
                                max_weight_5 REAL
                            );"""


def create_table(conn, create_table_sql):
    try:
        c = conn.cursor()
        c.execute(create_table_sql)
    except Error as e:
        print(e)


#### INSERT #########


def add_max_weight(conn, name: str, timestamp, weight: float, lifestyle: int) -> None:
    sql_1 = """ INSERT INTO weightTracker(name,timestamp,max_weight_1)
              VALUES(?,?,?) """
    sql_2 = """ UPDATE weightTracker SET max_weight_2=? WHERE timestamp=? AND name=? """

    sql_3 = """ UPDATE weightTracker SET max_weight_3=? WHERE timestamp=? AND name=? """

    sql_4 = """ UPDATE weightTracker SET max_weight_4=? WHERE timestamp=? AND name=? """

    sql_5 = """ UPDATE weightTracker SET max_weight_5=? WHERE timestamp=? AND name=? """
    try:
        cur = conn.cursor()
        if lifestyle == 1:
            cur.execute(sql_1, (name, timestamp, weight))
            conn.commit()
        elif lifestyle == 2:
            cur.execute(sql_2, (weight, timestamp, name))
            conn.commit()
        elif lifestyle == 3:
            cur.execute(sql_3, (weight, timestamp, name))
            conn.commit()
        elif lifestyle == 4:
            cur.execute(sql_4, (weight, timestamp, name))
            conn.commit()
        elif lifestyle == 5:
            cur.execute(sql_5, (weight, timestamp, name))
            conn.commit()
    except Error as e:
        print(f"insert failed {e}")


#### UPDATE #######


def update_weight(conn, name: str, date_obj: date, weight: float) -> None:
    sql = """ UPDATE weightTracker SET weight=? WHERE timestamp=? AND name=? """
    try:
        print(
            f"inside sql query, values: {name}; {date_obj}, {type(date_obj)}; {weight}"
        )
        cur = conn.cursor()
        cur.execute(sql, (weight, date_obj, name))
        conn.commit()
    except Error as e:
        print(f"insert failed {e}")


def update_weight_500_kcal(conn, name: str, timestamp, weight: float) -> None:
    sql = """ UPDATE weightTracker SET kcal_500=? WHERE timestamp=? AND name=? """
    try:
        cur = conn.cursor()
        cur.execute(sql, (weight, timestamp, name))
        conn.commit()
    except Error as e:
        print(f"insert failed {e}")


def update_weight_1000_kcal(conn, name: str, timestamp, weight: float) -> None:
    sql = """ UPDATE weightTracker SET kcal_1000=? WHERE timestamp=? AND name=? """
    try:
        cur = conn.cursor()
        cur.execute(sql, (weight, timestamp, name))
        conn.commit()
    except Error as e:
        print(f"insert failed {e}")


#### SELECT #######


def select_max_weight(conn):
    print("selecting rows!")
    cur = conn.cursor()
    cur.execute(
        "SELECT name, timestamp, weight, max_weight_1, max_weight_2, max_weight_3, max_weight_4, max_weight_5, kcal_500, kcal_1000 FROM weightTracker"
    )

    max_weights = []
    for (
        name,
        timestamp,
        weight,
        max_weight_1,
        max_weight_2,
        max_weight_3,
        max_weight_4,
        max_weight_5,
        kcal_500,
        kcal_1000,
    ) in cur:
        max_weights.append(
            {
                "name": name,
                "timestamp": timestamp,
                "actual_weight": weight,
                "fasted": max_weight_1,
                "max_weight_loss_2": max_weight_2,
                "max_weight_loss_3": max_weight_3,
                "max_weight_loss_4": max_weight_4,
                "max_weight_loss_5": max_weight_5,
                "kcal_500_deficit": kcal_500,
                "kcal_1000_deficit": kcal_1000,
            }
        )

    return max_weights


def drop_table_weight(conn):
    sql = "DROP TABLE IF EXISTS weightTracker"
    try:
        cur = conn.cursor()
        cur.execute(sql)
        print("Table weightTracker has been dropped")
    except Error as e:
        print(e)


#### SETUP ####
def add_pre_weights(conn):
    benji_weight_loss_list = [
        Calculate_Maximum_weight_loss(16, 81, 180, 25, "M", i + 1, "Benjamin")
        for i in range(5)
    ]
    for i in range(5):
        add_max_weight(conn, "Benjamin", date.today(), 81, i + 1)
    for j in range(len(benji_weight_loss_list)):
        for i in range(len(benji_weight_loss_list[j])):
            add_max_weight(
                conn,
                benji_weight_loss_list[j][i]["name"],
                benji_weight_loss_list[j][i]["timestamp"],
                benji_weight_loss_list[j][i]["weight"],
                j + 1,
            )


def update_kcals(conn):
    benji_weight_loss_list_500 = Calculate_kcal_deficit(16, 81, 500, "Benjamin")
    update_weight_500_kcal(conn, "Benjamin", date.today(), 81)
    for i in range(len(benji_weight_loss_list_500)):
        update_weight_500_kcal(
            conn,
            benji_weight_loss_list_500[i]["name"],
            benji_weight_loss_list_500[i]["timestamp"],
            benji_weight_loss_list_500[i]["weight"],
        )
    benji_weight_loss_list_1000 = Calculate_kcal_deficit(16, 81, 1000, "Benjamin")
    update_weight_1000_kcal(conn, "Benjamin", date.today(), 81)
    for i in range(len(benji_weight_loss_list_1000)):
        update_weight_1000_kcal(
            conn,
            benji_weight_loss_list_1000[i]["name"],
            benji_weight_loss_list_1000[i]["timestamp"],
            benji_weight_loss_list_1000[i]["weight"],
        )


def setup():
    conn = create_connection(database)
    if conn is not None:
        drop_table_weight(conn)
        create_table(conn, sql_create_weight_table)
        print("Table Created!")
        add_pre_weights(conn)
        update_kcals(conn)
        data = select_max_weight(conn)
        print(data)
        conn.close()


if __name__ == "__main__":
    # If executed as main, this will create tables and insert initial data
    setup()
